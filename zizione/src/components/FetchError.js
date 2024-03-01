import { FallbackProps } from "react-error-boundary";
import { Button, Result } from "antd";
import {Link} from 'react-router-dom';

export function FetchError(FallbackProps) {
    
    const { error, resetErrorBoundary } = FallbackProps;


  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={
        <>
          <Button type="primary" >
            Back Home
          </Button>
          
        </>
      }
    />

  );
}

export default FetchError;