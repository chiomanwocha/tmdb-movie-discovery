import { useMutation } from '@tanstack/react-query'
import { request } from '../instance'

/**
 * @param {*} data -> { }
 * @returns axios request with data
 */
const editAdmin = (data) => request({ url: '/account/{account_id}/favorite', method: 'POST', data })

const useChangeAdminStatus = (onSuccess, onError) => useMutation(editAdmin, {
  onError,
  onSuccess
})

export default useChangeAdminStatus
