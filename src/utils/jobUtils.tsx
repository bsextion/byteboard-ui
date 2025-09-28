import { Job, JobDetail } from "../models/types";


export const transformJobData = (jobs: any) => {
    const transformedJobData: JobDetail[] = jobs.map((item: Job) => ({
        jobId: item.job_id,
        jobTitle: item.job_title,
        employerName: item.employer_name,
        location: item.job_location || "Anywhere",
        employmentType: item.job_employment_type,
        salary: formatSalary(item.job_min_salary, item.job_max_salary),
        jobPostingDate: item.job_posted_at_datetime_utc ? formatPostedAt(item.job_posted_at_datetime_utc) : "Not listed",
        jobPublisher: item.job_publisher,
        isRemote: item.job_is_remote,
        jobLink: item.job_apply_link,
        description: item.job_description,
        skills: item.skills,
        certs: item.certs,
    }))
    console.log("Transformed job data:", transformedJobData);
    return transformedJobData;

}

const formatSalary = (min: string, max: string) => {
    const formattedMin = isNaN(Number(min)) ?  min : Number(min).toLocaleString("en-US", { style: "currency", currency: "USD" })
    const formattedMax = isNaN(Number(min)) ?  max : Number(max).toLocaleString("en-US", { style: "currency", currency: "USD" })

    if (min && max) {
        return `${formattedMin} - ${formattedMax}`;
    } else if (min) {
        return `${formattedMin}`;
    } else if (max) {
        return `${formattedMax}`;
    }
    return "Salary Not Specified";
}

const formatPostedAt = (utcDate: string) => {
    //if job posted more than 1 day ago, return the date in MM/DD/YYYY format
  const now = new Date();
  const convertedUtcDate = new Date(utcDate);
  const diffHours = Math.floor(Math.abs(convertedUtcDate.getTime() - now.getTime()) / 36e5);

  return diffHours < 24 ? `${diffHours} hours ago` : convertedUtcDate.toLocaleDateString();
}
