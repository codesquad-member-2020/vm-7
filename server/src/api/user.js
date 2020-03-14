import {Router} from 'express';

const router = Router()

router.get('/test', (req, res) => {
  try {
    console.log('test')  
  } catch (error) {
    console.log('test')
  }
  
})

export default router;