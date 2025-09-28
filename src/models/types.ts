export type JobSearchRequest = {
    query: string,
    page: number,
    sortBy: SortBy,
    datePosted: JobPostDate,
    workFromHome: boolean,
    employmentTypes: Employment[],
    excludePublishers: string,
    fields: string,
}

export type Job = {
    job_id: string,
    // employerLogo: string,
    employer_name: string,
    job_title: string,
    job_description: string,
    job_location: string,
    job_min_salary: string,
    job_max_salary: string
    job_employment_type: string,
    job_is_remote: boolean,
    job_posted_at_datetime_utc: string,
    job_publisher: string,
    job_apply_link: string,
    skills: string[],
    certs: string[],

}

export type JobDetail = {
    jobId: string,
    // employerLogo: string,
    employerName: string,
    jobTitle: string,
    location: string,
    salary: string,
    employmentType: string,
    isRemote: boolean,
    jobPostingDate: string,
    jobPublisher: string,
    jobLink: string,
    description: string,
    skills: string[],
    certs: string[],

}

export type Option = {
    label: string,
    value: any
}

export type FilterModals = {
    sortBy: FilterItem,
    datePosted: FilterItem,
    employmentTypes: FilterItem,
    excludePublishers: FilterItem,
    workFromHome: FilterItem
}
export type FilterItem = {
  mapping: string;
  title: string;
  selected: Option | Option[] | boolean;
  options?: Option[];
};


export enum SortBy {
    RECENT = "RECENT",
    RELEVANT = "RELEVANT"
}

export enum Employment {
    FULL_TIME = "FULLTIME",
    PART_TIME = "PARTTIME",
    CONTRACTOR = "CONTRACTOR",
    INTERN = "INTERN",
}

export enum JobPostDate {
    ALL = "all",
    TODAY = "today",
    THREEDAYS = "3days",
    WEEK = "week",
    MONTH = "month",
}

export enum JobPublisher {
    LINKEDIN = "LinkedIn",
    INDEED = "Indeed",
    DICE = "Dice",
}

// export type JobDetail = {
//     employerLogo: string,
//     employer: string,
//     jobTitle: string,
//     description: string,
//     location: string,
//     salary: string
//     employmentType: string,
//     postingDate: string,
//     applyLink: string,
//     isRemote: boolean,
//     skills: JobSkills[],
//     certs: JobCerts[],
// }

// export type JobSkills = {
//     skill: string
// }

// export type JobCerts = {
//     certificate: string
// }
