import { useEffect, useState } from "react";
import API from "../api/axios";
import JobCard from "../components/JobCard";

export default function Home() {
  const [jobs, setJobs] = useState([]);

  
  const sampleJobs = [
    {
      _id: "1",
      title: "Frontend Developer (React)",
      company: "TechNova Solutions",
      location: "Remote",
      salary: "$2,500 - $3,500/month",
      description:
        "We are looking for a skilled React developer to build modern, responsive web applications. You will work closely with our design and backend teams to deliver high-quality user experiences."
    },
    {
      _id: "2",
      title: "Backend Developer (Node.js)",
      company: "CloudCore Systems",
      location: "Lagos, Nigeria",
      salary: "$3,000/month",
      description:
        "Join our backend team to design and maintain scalable APIs using Node.js and MongoDB. Experience with RESTful services and authentication is required."
    },
    {
      _id: "3",
      title: "UI/UX Designer",
      company: "BrightLabs",
      location: "Hybrid",
      salary: "$2,000/month",
      description:
        "We need a creative UI/UX designer to craft beautiful and user-friendly interfaces for web and mobile applications. Strong portfolio required."
    },
    {
      _id: "4",
      title: "Full Stack Developer",
      company: "NextGen Tech",
      location: "Abuja, Nigeria",
      salary: "$4,000/month",
      description:
        "Looking for a MERN stack developer who can handle both frontend and backend tasks. You will help us build scalable digital products used by thousands."
    }
  ];

  useEffect(() => {
    API.get("/jobs")
      .then(res => {
        if (res.data.length === 0) {
          setJobs(sampleJobs); 
        } else {
          setJobs(res.data);
        }
      })
      .catch(() => {
        setJobs(sampleJobs); 
      });
  }, []);

  return (
    <div className="container">
      <h2>Available Jobs</h2>
      {jobs.map(job => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
}
