export type JobSearchRequest = {
    query: string,
    datePosted: string,
    workFromHome: boolean,
    excludePublishers: string,
    fields: string,
}

export type JobDetail = {
    employerLogo: string,
    employer: string,
    jobTitle: string,
    description: string,
    location: string,
    salary: string
    employmentType: string,
    postingDate: string,
    applyLink: string,
    isRemote: boolean,
    skills: JobSkills[],
    certs: JobCerts[],
}

export type JobSkills = {
skill: string
}

export type JobCerts = {
    certificate: string
}