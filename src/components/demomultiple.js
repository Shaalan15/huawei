import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

// Sample chart data
const pdata = [
  {
    name: "Worker 1",
    temperature: 39,
    productivity: 30,
  },
  {
    name: "Worker 2",
    temperature: 37,
    productivity: 60,
  },
  {
    name: "Worker 3",
    temperature: 38,
    productivity: 40,
  },
  {
    name: "Worker 4",
    temperature: 36.5,
    productivity: 55,
  },
  {
    name: "Worker 5",
    temperature: 37,
    productivity: 50,
  },
  {
    name: "Worker 6",
    temperature: 39,
    productivity: 25,
  },
];

function Demo() {
  return (
    <>
      <h1 className="text-heading">
        Average Temperature of Construction Workers
      </h1>
      <Grid container spacing={3}>
        <Grid item xs >
        <ResponsiveContainer width="100%" aspect={4}>
        <LineChart data={pdata} margin={{ right: 300 }}>
          <CartesianGrid />
          <XAxis dataKey="name" interval={"preserveStartEnd"} />
          <YAxis></YAxis>
          <Legend />
          <Tooltip />
          <Line dataKey="temperature" stroke="black" activeDot={{ r: 8 }} />
          <Line dataKey="productivity" stroke="red" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
        </Grid>
        <Grid item xs >
        <ResponsiveContainer width="100%" aspect={4}>
        <LineChart data={pdata} margin={{ right: 300 }}>
          <CartesianGrid />
          <XAxis dataKey="name" interval={"preserveStartEnd"} />
          <YAxis></YAxis>
          <Legend />
          <Tooltip />
          <Line dataKey="temperature" stroke="black" activeDot={{ r: 8 }} />
          <Line dataKey="productivity" stroke="red" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
        </Grid>
        <Grid item xs>
        <ResponsiveContainer width="100%" aspect={4}>
        <LineChart data={pdata} margin={{ right: 300 }}>
          <CartesianGrid />
          <XAxis dataKey="name" interval={"preserveStartEnd"} />
          <YAxis></YAxis>
          <Legend />
          <Tooltip />
          <Line dataKey="temperature" stroke="black" activeDot={{ r: 8 }} />
          <Line dataKey="productivity" stroke="red" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
        </Grid>
      </Grid>

    </>
  );
}

export default Demo;
