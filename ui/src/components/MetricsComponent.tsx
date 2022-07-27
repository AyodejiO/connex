function MetricsComponent( props: any) {
  return (
    <>
      <header>
        <h4>Metrics</h4>
      </header>
      <div className="stream">
        <code>
          { props.metrics.split('\n').map((str: string, key: number) => <p key={key}>{str}</p>) }
        </code>
      </div>
    </>
  );
}

export default MetricsComponent;