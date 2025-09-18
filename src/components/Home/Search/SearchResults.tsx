import React from "react";
import DetailSidePanel from "./Jobs/DetailSidePanel";
import JobsPanel from "./Jobs/JobsPanel";
import { Job } from "../../../models/types";

type SearchResultsProps = {
  loading: boolean;
  jobs: any,
  currentPage: number,
  setSearchParams: React.Dispatch<React.SetStateAction<any>>,
  setTriggerSearch: React.Dispatch<React.SetStateAction<number>>,
};

const SearchResults: React.FC<SearchResultsProps> = ({ loading, jobs, currentPage, setSearchParams, setTriggerSearch }) => {
  {
    const [selectedJob, setSelectedJob] = React.useState< any>({});
    const [showJobDetail, setShowJobDetail] = React.useState(false);

    const handleJobClick = (jobId: string) => {
      const clickedJob = jobs.find((job: any) => job.jobId === jobId);
        
        setSelectedJob(clickedJob);
        setShowJobDetail(true);
        console.log("setting job: ", selectedJob);
      
    }

    const handleNextPage = (e: any, pageSelected: number) => {
      setSearchParams((prev) => ({
        ...prev,
        page: pageSelected
      }));

      setTriggerSearch((prev: number) => prev + 1);

    }

    const handlePanelClose = () => {
        setShowJobDetail(false);
        setSelectedJob(null);
    }

    return (
      <>
        <JobsPanel loading={loading} jobs={jobs} currentPage={currentPage} handleJobClick={handleJobClick} handleNextPage={handleNextPage} />
        {<DetailSidePanel  selectedJob={selectedJob} showJobDetail={showJobDetail} handlePanelClose={handlePanelClose} />}

      </>
    );
  }
}

export default SearchResults;