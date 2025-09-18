import axios from "axios";
import { JobDetail, JobSearchRequest } from "../models/types";
import { useEffect, useRef, useState } from "react";
import { api_job_search } from "./apiGlobal";
import { transformJobData } from "./jobUtils";

export const useJobSearch = (params: JobSearchRequest, deps: any = []) => {
  const [jobs, setJobs] = useState<JobDetail[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const isFirstLoad = useRef(false);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await axios({
        params,
        url: api_job_search,
        paramsSerializer: {
          indexes: null,
        }
      }

      );
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
      fetchJobs();
    }
    else {
      isFirstLoad.current = true;
    }
  }, [...deps]);

  return { jobs, loading, error };
}; 