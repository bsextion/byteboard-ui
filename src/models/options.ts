import { Employment, JobPostDate, SortBy, Option } from "./types"

export const sortByOptions: Option[] = [
    { label: "Most Recent", value: SortBy.RECENT },
    { label: "Most Relevant", value: SortBy.RELEVANT },
]

export const filterDateOptions: Option[] = [
    { label: "Past 24 hours", value: JobPostDate.TODAY },
    { label: "Past 3 days", value: JobPostDate.THREEDAYS },
    { label: "Past week", value: JobPostDate.WEEK },
    { label: "Past month", value: JobPostDate.MONTH },
    { label: "All Time", value: JobPostDate.ALL }
]

export const filterEmploymentOptions: Option[] = [
    { label: "Full-Time", value: Employment.FULL_TIME },
    { label: "Part-Time", value: Employment.PART_TIME },
    { label: "Contractor", value: Employment.CONTRACTOR },
    { label: "Intern", value: Employment.INTERN }
]

export const filterWorkFromHomeOptions: Option[] = [
    { label: "Remote Only", value: true },
    { label: "Remote Only", value: false },
]