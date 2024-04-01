"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';

interface RankData {
  quota: string;
  institute: string;
  course: string;
  category: string;
  round1: number;
  round2: number;
  round3: number;
}

const SSRPage = () => {
  const [rankData, setRankData] = useState<RankData[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://theneetpgcounselling.com/closing-rank-details?page=1&state=maharashtras&counseling_type=Govt%20Quota&college%5B%5D=VMMC%2C%20Solapur&course%5B%5D=OBG&quota%5B%5D=MAHA-Govt%20Quota&category%5B%5D=OBC');
      setRankData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
        
      <h1>Closing Rank Details</h1>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Quota</th>
              <th>Institute</th>
              <th>Course</th>
              <th>Category</th>
              <th>Round 1</th>
              <th>Round 2</th>
              <th>Round 3</th>
            </tr>
          </thead>
          <tbody>
            {rankData.map((data, index) => (
              <tr key={index}>
                <td>{data.quota}</td>
                <td>{data.institute}</td>
                <td>{data.course}</td>
                <td>{data.category}</td>
                <td>{data.round1}</td>
                <td>{data.round2}</td>
                <td>{data.round3}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-3">
          <div className="aiz-pagination">
            <input id="current_page_number" value="1" hidden />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSRPage;
