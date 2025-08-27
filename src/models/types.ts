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
    description: string,
    job_location: string,
    job_min_salary: string,
    job_max_salary: string
    job_employment_type: string,
    job_is_remote: boolean,
    job_posted_at_datetime_utc: string,
    job_publisher: string,
    job_apply_link: string,

}

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

export type FilterMenuModal = {
    title: string,
    selected: any,
    options: any

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
