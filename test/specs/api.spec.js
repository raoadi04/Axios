import browserAxios from '../../lib/browser'
import axios, { Cancel, CancelToken, isCancel } from '../../lib/axios'

describe('static api', function () {
  it('should have request method helpers', function () {
    expect(typeof axios.request).toEqual('function')
    expect(typeof axios.get).toEqual('function')
    expect(typeof axios.head).toEqual('function')
    expect(typeof axios.options).toEqual('function')
    expect(typeof axios.delete).toEqual('function')
    expect(typeof axios.post).toEqual('function')
    expect(typeof axios.put).toEqual('function')
    expect(typeof axios.patch).toEqual('function')
  })

  it('should have promise method helpers', function () {
    const promise = axios.get()

    expect(typeof promise.then).toEqual('function')
    expect(typeof promise.catch).toEqual('function')
  })

  it('should have defaults', function () {
    expect(typeof axios.defaults).toEqual('object')
    expect(typeof axios.defaults.headers).toEqual('object')
  })

  it('should have interceptors', function () {
    expect(typeof axios.interceptors.request).toEqual('object')
    expect(typeof axios.interceptors.response).toEqual('object')
  })

  it('should have factory method', function () {
    expect(typeof axios.create).toEqual('function')
  })

  it('should have Cancel, CancelToken, and isCancel properties', function () {
    expect(typeof browserAxios.Cancel).toEqual('function')
    expect(typeof browserAxios.CancelToken).toEqual('function')
    expect(typeof browserAxios.isCancel).toEqual('function')

    expect(typeof Cancel).toEqual('function')
    expect(typeof CancelToken).toEqual('function')
    expect(typeof isCancel).toEqual('function')
  })
})

describe('instance api', function () {
  const instance = axios.create()

  it('should have request methods', function () {
    expect(typeof instance.request).toEqual('function')
    expect(typeof instance.get).toEqual('function')
    expect(typeof instance.options).toEqual('function')
    expect(typeof instance.head).toEqual('function')
    expect(typeof instance.delete).toEqual('function')
    expect(typeof instance.post).toEqual('function')
    expect(typeof instance.put).toEqual('function')
    expect(typeof instance.patch).toEqual('function')
  })

  it('should have interceptors', function () {
    expect(typeof instance.interceptors.request).toEqual('object')
    expect(typeof instance.interceptors.response).toEqual('object')
  })
})
