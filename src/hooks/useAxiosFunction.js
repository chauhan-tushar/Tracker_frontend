import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useAxiosFunction = (message) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)
  const [controller, setController] = useState();
  const navigate = useNavigate();

  const axiosFetch = async (configObj) => {
    const { axiosInstance, method, url, requestConfig = {}, redirectUrl } = configObj;

    try {
      setLoading(true);
      const ctrl = new AbortController();
      setController(ctrl);
      const res = await axiosInstance[method.toLowerCase()](url, {
        ...requestConfig
      });
      localStorage.setItem('user', JSON.stringify(res.data))
      setResponse(res.data);
      toast.success(message,{
        duration: 4000,
        position: 'top-right',
    });

      if (redirectUrl){
        navigate(redirectUrl);
      }

    } catch (err) {
      let errors = err.response?.data?.message;
      if (Object.keys(errors).length >= 0){
        const error = errors.constructor === Object ?  Object.values(errors) : errors;
        // setError(Object.values(errors)[0]);
        toast.error(error,{
          duration: 4000,
          position: 'top-right',
        })
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // useEffect cleanup function
    return () => controller && controller.abort();
  }, [controller]);

  return [response, error, loading, axiosFetch];
};

export default useAxiosFunction;
