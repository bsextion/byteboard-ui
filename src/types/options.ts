import { Employment, JobPostDate, SortBy } from "."

export const sortByOptions = [
    { label: "Most Recent", value: SortBy.RECENT },
    { label: "Most Relevant", value: SortBy.RELEVANT },
]

export const filterDateOptions = [
    { label: "Past 24 hours", value: JobPostDate.TODAY },
    { label: "Past 3 days", value: JobPostDate.THREEDAYS },
    { label: "Past week", value: JobPostDate.WEEK },
    { label: "Past month", value: JobPostDate.MONTH },
    { label: "All Time", value: JobPostDate.ALL }
]

export const filterEmploymentOptions = [
    { label: "All", value: "" },
    { label: "Full-Time", value: Employment.FULL_TIME },
    { label: "Part-Time", value: Employment.PART_TIME },
    { label: "Contractor", value: Employment.CONTRACTOR },
    { label: "Intern", value: Employment.INTERN }
]