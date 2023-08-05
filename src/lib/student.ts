import { api } from './api'
import { studentAllDisciplineShema } from './validations/discipline'
import { studentHistorySchema } from './validations/history'
import { studentPartialAbsencesSchema } from './validations/partial-absences'
import { studentPartialGradeSchema } from './validations/partial-grade'
import { studentProfileSchema } from './validations/profile'
import { studentScheduleSchema } from './validations/schedule'
import { schoolGradeSchema } from './validations/school-grade'

export const getStudentProfile = async (accessToken: string) => {
  return await api.get(studentProfileSchema, '/student/profile', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
}

export const getStudentHistory = async (accessToken: string) => {
  return await api.get(studentHistorySchema, '/student/history', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
}

export const getStudentSchedules = async (accessToken: string) => {
  return await api.get(studentScheduleSchema, '/student/schedule', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
}

export const getStudentPartialGrades = async (accessToken: string) => {
  return await api.get(studentPartialGradeSchema, '/student/partial-grade', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
}

export const getStudentPartialAbsences = async (accessToken: string) => {
  return await api.get(
    studentPartialAbsencesSchema,
    '/student/partial-absences',
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )
}

export const getStudentSchoolGrade = async (accessToken: string) => {
  return await api.get(schoolGradeSchema, '/student/school-grade', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
}

export const getStudentDisciplines = async (accessToken: string) => {
  return await api.get(studentAllDisciplineShema, '/student/disciplines/', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
}
