import React from 'react'
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Chart = () => {
    const data = [
        {
          name: '15',
          p1: 590,
          p2: 800,
        },
        {
          name: '16',
          p1: 868,
          p2: 967,
        },
        {
          name: '17',
          p1: 1397,
          p2: 1098,
        },
        {
          name: '18',
          p1: 1480,
          p2: 1200,
        },
        {
          name: '19',
          p1: 1520,
          p2: 1108,
        },
        {
          name: '20',
          p1: 1400,
          p2: 680,
        },
        {
          name: '21',
          p1: 590,
          p2: 800,
        },
        {
          name: '22',
          p1: 868,
          p2: 967,
        },
        {
          name: '23',
          p1: 1397,
          p2: 1098,
        },
        {
          name: '24',
          p1: 1480,
          p2: 1200,
        },
        {
          name: '25',
          p1: 1520,
          p2: 1108,
        },
        {
          name: '26',
          p1: 1400,
          p2: 680,
        },
        {
          name: '27',
          p1: 1480,
          p2: 1200,
        },
        {
          name: '28',
          p1: 1520,
          p2: 1108,
        },
        {
          name: '29',
          p1: 1400,
          p2: 680,
        },
      ];
    return (
        <ResponsiveContainer width="100%" height="100%" className="mt-5">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 80,
            bottom: 20,
            left: 20,
          }}
        >
            <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#0E76D5" stopOpacity={1}/>
            <stop offset="95%" stopColor="#0E76D5" stopOpacity={0.1}/>
          </linearGradient>
          <linearGradient id="colorUv2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#EB6161" stopOpacity={1}/>
            <stop offset="95%" stopColor="#EB6161" stopOpacity={0.1}/>
          </linearGradient>
        </defs>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" label={{ value: '', position: 'insideBottomRight', offset: 0 }} scale="band" />
          <YAxis label={{ value: '', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="p2" fill="url(#colorUv2)" stroke="#0E76D550" />
          <Area type="monotone" dataKey="p1" fill="url(#colorUv)" stroke="#EB616150" />
          {/* <Bar dataKey="pv" barSize={20} fill="#413ea0" /> */}
          {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" /> */}
        </ComposedChart>
      </ResponsiveContainer>
    )
}

export default Chart