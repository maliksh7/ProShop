import { Button } from 'react-bootstrap'

const Content = () => {
  return (
    <div>
        <p> The place where you can get customized outlets. </p>
        <>
            <Button variant="primary">Sign in</Button>{' '}
            <Button variant="secondary">Sign up</Button>{' '}
            <Button variant="dark">Order Now</Button>{' '}
        </>
    </div>
  )
}

export default Content