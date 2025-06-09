import axios from "axios";
import { JobSearchRequest } from "../types";
import { useEffect, useRef, useState } from "react";
import { api_job_search } from "./apiGlobal";

export const useJobSearch = (params: JobSearchRequest, deps: any = []) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isFirstLoad = useRef(false);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(api_job_search, { params });
      //transform the job data
      
      setJobs(response.data);
      console.log("Jobs fetched:", response.data);
    }
    catch (err: any) {
      setError(err);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (isFirstLoad.current) {
    fetchJobs();
    }
    else {
      isFirstLoad.current = true;
    }
  }, [...deps]);

  return { jobs, loading, error };
}; 