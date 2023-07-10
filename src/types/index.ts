import { z } from 'zod';

import { studentDisciplineSchema } from '~/lib/validations/discipline';
import {
  studentDisciplineHistorySchema,
  studentHistorySchema,
} from '~/lib/validations/history';
import { disciplineLessonsSchema, studentPartialAbsencesSchema } from '~/lib/validations/partial-absences';
import { studentPartialGradeSchema } from '~/lib/validations/partial-grade';
import { editProfileSchema, studentProfileSchema } from '~/lib/validations/profile';
import { scheduleLesson, studentScheduleSchema } from '~/lib/validations/schedule';
import {
  schoolGradeDisciplineSchema,
  schoolGradeSchema,
} from '~/lib/validations/school-grade';

export type StudentProfile = z.infer<typeof studentProfileSchema>;
export type StudentEditProfile = z.infer<typeof editProfileSchema>;
export type StudentPartialGrade = z.infer<typeof studentPartialGradeSchema>;
export type StudentDisciplineLesson = z.infer<typeof disciplineLessonsSchema>
export type StudentPartialAbsences = z.infer<
  typeof studentPartialAbsencesSchema
>;
export type StudentSchedule = z.infer<typeof studentScheduleSchema>;
export type StudentScheduleLesson = z.infer<typeof scheduleLesson>;
export type StudentHistory = z.infer<typeof studentHistorySchema>;
export type StudentDisciplineHistory = z.infer<
  typeof studentDisciplineHistorySchema
>;
export type StudentDiscipline = z.infer<typeof studentDisciplineSchema>;
export type StudentSchoolGrade = z.infer<typeof schoolGradeSchema>;
export type StudentSchoolGradeDiscipline = z.infer<
  typeof schoolGradeDisciplineSchema
>;
