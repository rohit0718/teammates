/**
 * Elements that tables are sorted by.
 */
export enum SortBy {
    /**
     * Nothing.
     */
    NONE,

    /**
     * Section Name.
     */
    SECTION_NAME,

    /**
     * Team name.
     */
    TEAM_NAME,

    /**
     * Student Name.
     */
    STUDENT_NAME,

    /**
     * The email of the student.
     */
    EMAIL,

    /**
     * The gender of the student.
     */
    STUDENT_GENDER,

    /**
     * Institution.
     */
    INSTITUTION,

    /**
     * Nationality.
     */
    NATIONALITY,

    /**
     * Join status
     */
     JOIN_STATUS,

    /**
     * Course ID.
     */
    COURSE_ID,

    /**
     * Course Name.
     */
    COURSE_NAME,

    /**
     * The creation time of the course.
     */
    COURSE_CREATION_DATE,

    /**
     * Completion status of feedback session.
     */
    SESSION_COMPLETION_STATUS,

    /**
     * Feedback session name.
     */
    SESSION_NAME,

    /**
     * Start time of the feedback session.
     */
    SESSION_START_DATE,

    /**
     * End time of the feedback session.
     */
    SESSION_END_DATE,

    /**
     * The creation time of the feedback session.
     */
    SESSION_CREATION_DATE,

    /**
     * The time when the feedback session is moved to recycle bin.
     */
    SESSION_DELETION_DATE,

    /**
     * Feedback question type.
     */
    QUESTION_TYPE,

    /**
     * Feedback question text (brief).
     */
    QUESTION_TEXT,

    /**
     * Team of the giver of the feedback response.
     */
    GIVER_TEAM,

    /**
     * Name of the giver of the feedback response.
     */
    GIVER_NAME,

    /**
     * Team of the recipient of the feedback response.
     */
    RECIPIENT_TEAM,

    /**
     * Name of the recipient of the feedback response.
     */
    RECIPIENT_NAME,

    /**
     * Average score of the numerical scale question.
     */
    NUMERICAL_SCALE_AVERAGE,

    /**
     * Maximum score of the numerical scale question.
     */
    NUMERICAL_SCALE_MAX,

    /**
     * Minimum score of the numerical scale question.
     */
    NUMERICAL_SCALE_MIN,

    /**
     * Average score (exclude self-review) of the numerical scale question.
     */
    NUMERICAL_SCALE_AVERAGE_EXCLUDE_SELF,

    /**
     * Option text
     */
    MCQ_CHOICE,

    /**
     * Weight assigned to the option
     */
    MCQ_WEIGHT,

    /**
     * Number of selection of that option
     */
    MCQ_RESPONSE_COUNT,

    /**
     * Percentage of selection of that option
     */
    MCQ_PERCENTAGE,

    /**
     * Weighted percentage of selection of that option
     */
    MCQ_WEIGHTED_PERCENTAGE,

    /**
     * Option to rank
     */
    RANK_OPTIONS_OPTION,

    /**
     * Overall ranking of the option
     */
    RANK_OPTIONS_OVERALL_RANK,

    /**
     * Giver's / Recipients's team
     */
    RANK_RECIPIENTS_TEAM,

    /**
     * Recipient's name
     */
    RANK_RECIPIENTS_RECIPIENT,

    /**
     * Recipient's self rank
     */
    RANK_RECIPIENTS_SELF_RANK,

    /**
     * Recipient's overall rank
     */
    RANK_RECIPIENTS_OVERALL_RANK,

    /**
     * Recipient's overall rank excluding self
     */
    RANK_RECIPIENTS_OVERALL_RANK_EXCLUDING_SELF,

    /**
     * Frequency of choice
     */
    RUBRIC_CHOICE,

    /**
     * Option to constsum options
     */
    CONSTSUM_OPTIONS_OPTION,

    /**
     * Option's recieved/total/average points
     */
    CONSTSUM_OPTIONS_POINTS,

    /**
     * Recipient's received/total/average points
     */
    CONSTSUM_RECIPIENTS_POINTS,

}

/**
 * Sort order.
 */
export enum SortOrder {
    /**
     * Descending sort order.
     */
    DESC,

    /**
     * Ascending sort order
     */
    ASC,
}
