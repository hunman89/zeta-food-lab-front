import { Grid, Typography } from "@mui/material";
import React from "react";

export default function IntroImage() {
  return (
    <Grid
      style={{ height: 800 }}
      container
      justifyContent="center"
      alignItems="center"
    >
      <Grid style={{ padding: 50 }}>
        <Typography variant="subtitle1" gutterBottom>
          인간의 건강하고 행복한 삶을 위한
        </Typography>
        <Typography variant="h3" gutterBottom>
          마이크로바이옴 파마바이오틱스 치료제
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          장환경을 재현하는 독자적인 특허기술로
        </Typography>
        <Typography variant="h3" gutterBottom>
          개인 맞춤형 헬스케어 솔루션 제공
        </Typography>
      </Grid>
    </Grid>
  );
}
