import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, ...];

function getIntroOfPage(label) {
  if (label === 'Page A') {
    return 'Page A is about men's clothing';
  } if (label === 'Page B') {
    return 'Page B is about women's dress';
  } if (label === 'Page C') {
    return 'Page C is about women's bag';
  } if (label === 'Page D') {
    return 'Page D is about household goods';
  } if (label === 'Page E') {
    return 'Page E is about food';
  } if (label === 'Page F') {
    return 'Page F is about baby food';
  }
}

function CustomTooltip({ payload, label, active }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }

  return null;
}

const BookingCharts = () => {
    return (
        <div>
             <BarChart width={600} height={300} data={data}>
    <XAxis dataKey="name" tick={renderCustomAxisTick} />
    <YAxis />
    <Tooltip content={<CustomTooltip />}/>
    <Bar dataKey="uv" fill="#8884d8"
      shape={<TriangleBar />} />
  </BarChart>

            
        </div>
    );
};

export default BookingCharts;