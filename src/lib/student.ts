import { Session } from 'next-auth'

import { api } from './api'
import { studentHistorySchema } from './validations/history'
import { studentPartialAbsencesSchema } from './validations/partial-absences'
import { studentPartialGradeSchema } from './validations/partial-grade'
import { studentProfileSchema } from './validations/profile'
import { studentScheduleSchema } from './validations/schedule'

type Props = {
  user: Session['user']
}

export const getStudentProfile = async ({ user }: Props) => {
  return await api.get(studentProfileSchema, '/student/profile', {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  })
}

export const getStudentHistory = async ({ user }: Props) => {
  return await api.get(studentHistorySchema, '/student/history', {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  })
}

export const getStudentSchedules = async ({ user }: Props) => {
  return await api.get(studentScheduleSchema, '/student/schedule', {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  })
}

export const getStudentPartialGrades = async ({ user }: Props) => {
  return await api.get(studentPartialGradeSchema, '/student/partial-grade', {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  })
}

export const getStudentPartialAbsences = async ({ user }: Props) => {
  return await api.get(
    studentPartialAbsencesSchema,
    '/student/partial-absences',
    {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    },
  )
}
