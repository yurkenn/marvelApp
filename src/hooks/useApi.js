/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Config from 'react-native-config';

const useApi = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(url, {
        params: {
          apikey: Config.PUBLIC_KEY,
          hash: Config.HASH,
          ts: Config.TS,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setData(response.data.data.results);
      console.log(response.data.data.results);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [data, loading, error];
};

export default useApi;
