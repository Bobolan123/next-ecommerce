
export default function SpecificJob(props:any) {
    const {params} = props
  return (
    <div>
      <p>Post:{params?.id} </p>
    </div>
  );
}
