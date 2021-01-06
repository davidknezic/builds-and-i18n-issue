import React, { useEffect, useState } from 'react';

export default function IndexPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState();

  useEffect(async () => {
    setLoading(true);

    const res = await fetch('/rewritten');

    if (res.status !== 200) {
      setLoading(false);
      setError(`${res.status} ${res.statusText}`);
      return;
    }

    const data = await res.text();

    setLoading(false);
    setData(data);
  }, []);

  if (loading) {
    return (
      <div>loading from <code>/rewritten</code> (which rewrites to <code>/function.js</code>)...</div>
    );
  }

  if (error) {
    return (
      <div>failed to load from <code>/rewritten</code> (which rewrites to <code>/function.js</code>): {error}</div>
    );
  }

  return (
    <div>success from <code>/rewritten</code> (which rewrites to <code>/function.js</code>): {data}</div>
  );
}
