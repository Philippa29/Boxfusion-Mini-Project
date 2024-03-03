import { Button, Result } from "antd";
import { Navigate } from "react-router-dom";


export function FetchError(FallbackProps) {
    
    const { error, resetErrorBoundary } = FallbackProps;


  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={
        <>
          <Button type="primary"
          onClick = {() => window.location.href = '/'}>
            Back Home 
          </Button>
          
        </>
      }
    />

  );
}

export default FetchError;