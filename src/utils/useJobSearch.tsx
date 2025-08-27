import axios from "axios";
import { JobSearchRequest } from "../models/types";
import { useEffect, useRef, useState } from "react";
import { api_job_search } from "./apiGlobal";
import { transformJobData } from "./jobUtils";
export const useJobSearch = (params: JobSearchRequest, deps: any = []) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const isFirstLoad = useRef(false);

  const fetchJobs = async () => {
    try {
      setLoading(true);

      console.log("Calling api with params:", params.employmentTypes);
      const response = await axios({
        params,
        url: api_job_search,
        paramsSerializer: {
          indexes: null,
        }
      }

      );
      console.log("Jobs fetched:", response.data);
      //transform the job data
      const transformedJobs = transformJobData(response.data.data);



      setJobs(transformedJobs);
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
      // console.log("useJobSearch params:", params);
      fetchJobs();
    }
    else {
      isFirstLoad.current = true;
    }
  }, [...deps]);

  return { jobs, loading, error };
}; 