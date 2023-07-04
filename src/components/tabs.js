import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
  ))({
    '& .MuiTabs-indicator': {
      display: 'flex',
      backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#950740',
    },
  });
  
  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: 'none',
      fontSize: '2vmin',
      fontFamily: 'Comfortaa',
      alignSelf: 'start',
      width: '100%',
      color: '#bdbdbf',
      '&.Mui-selected': {
        color: '#c3073f',
      },
      '&.Mui-focusVisible': {
        backgroundColor: '#950740',
      },
    }),
  );

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: '#1A1A1D', display: 'flex', height: 'max-content', width: 'fit-content', fontFamily: 'Comfortaa' }}
    >
      <StyledTabs
        orientation="vertical"
        variant="standard"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, overflow: 'visible', borderColor: 'divider', width: 'fit-content' }}
        color='white'
      >
        <StyledTab className="experience-tab" label="Amazon" {...a11yProps(0)} />
        <StyledTab className="experience-tab" label="Carnegie Mellon University" {...a11yProps(1)} />
        <StyledTab className="experience-tab" label="Lawrence Berkeley National Laboratory" {...a11yProps(2)} />
        <StyledTab className="experience-tab" label="TalkMeUp" {...a11yProps(3)} />
      </StyledTabs>
      <TabPanel value={value} index={0}>
        <div className='experience-header'>Software Development Engineer @ <span className='highlight'>Amazon</span></div>
        <div className='experience-dates'>May 2021 - Present</div>
        <div className='experience-content'>
        <ul className='experience-list'>
            <li><span>Worked on the inventory control team to develop new features for an internal auditing tool used by the corresponding science team.</span></li>
            <li><span>Developed automated generation of new data for the new features that weren't supported yet.</span></li>
            <li><span>Worked on the frontend and backend of the auditing tool to give the user access to the new features and the new data that was generated.</span></li>
            <li><span>Developed the feature to run automated simulations with the click of a button so that the scientists wouldn't have to waste so much time doing each step manually.</span></li>
            <li><span>Created a button on the frontend that could make a call to the backend to trigger the simulation.</span></li>
            <li><span>Developed automated generation of new data for the new features that weren't supported yet.</span></li>
            <li><span>Worked on the frontend and backend of the auditing tool to give the user access to the new features and the new data that was generated.</span></li>
        </ul>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className='experience-header'>15-122 Teaching Assistant @ <span className='highlight'>CMU</span></div>
        <div className='experience-dates'>Jun 2020 - May 2022</div>
        <div className='experience-content'>
        <ul className='experience-list'>
            <li><span>Mentored students for the computer science course Principles of Imperative Computation, also known as 15-122, at CMU.</span></li>
            <li><span>Attended weekly grading meetings to grade homeworks and grade exams.</span></li>
            <li><span>Taught programming labs and small instructional sections to students every week.</span></li>
            <li><span>Held office hours twice a week to help students.</span></li>
        </ul>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className='experience-header'>Student Researcher @ <span className='highlight'>LBNL</span></div>
        <div className='experience-dates'>Jan 2021 - Jun 2021</div>
        <div className='experience-content'>
        <ul className='experience-list'>
            <li><span>Worked as a student researcher in the Lawrence Berkeley National Laboratory.</span></li>
            <li><span>Reviewed shell scripts for older product and converted into python scripts for the 2.0 product.</span></li>
            <li><span>Applied new methods defined in the Swagger API into the new python scripts.</span></li>
        </ul>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div className='experience-header'>Full Stack Developer @ <span className='highlight'>TalkMeUp</span></div>
        <div className='experience-dates'>May 2020 - Aug 2020</div>
        <div className='experience-content'>
        <ul className='experience-list'>
            <li><span>Tackled the challenge of familiarizing myself with new programming languages and frameworks like Typescript and Angular.</span></li>
            <li><span>Developed the user onboarding pages on the v 2.0 website from scratch and ensured successful transfer of data between frontend and backend.</span></li>
            <li><span>Involved myself in the SaaS (Software as a Service) product development process.</span></li>
        </ul>
        </div>
      </TabPanel>
    </Box>
  );
}