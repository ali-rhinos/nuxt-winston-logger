import { logger } from '@/events/errorLogger';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vue:error', (err: any, target, info) => {
    let error = err.toString()
    const stack = err.stack.split('\n').splice(0, 2).join('')
    if (stack)
      error = stack
    logger.log({
      level: 'error',
      message: info + ' => ' + error
    });

  })
  nuxtApp.hook('app:error', (..._args) => {
    console.log('app:error')
  })
  nuxtApp.vueApp.config.errorHandler = (..._args) => {
    console.error('global error handler')

  }
})
