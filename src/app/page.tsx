import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { CheckCircle, Clock, AlertCircle, Calendar, Code, TestTube, Rocket, Headphones } from 'lucide-react';

const TimelineItem = ({ icon: Icon, phase, weeks, status, description, color }: {
    icon: React.ElementType;
    phase: string;
    weeks: number;
    status: string;
    description: string;
    color: string;
}) => (
  <div className="flex items-start mb-8 relative group hover:scale-105 transition-transform duration-300">
    {/* Construction pattern background */}
    <div className="absolute inset-0 bg-yellow-50 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.03)_10px,rgba(0,0,0,0.03)_20px)]" />
    </div>

    {/* Animated icon container */}
    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${color} 
      transform transition-all duration-300 hover:scale-110 hover:rotate-12
      animate-bounce`}>
      <Icon className="w-6 h-6 text-white animate-pulse" />
    </div>

    <div className="ml-4 flex-grow p-3">
      <div className="flex items-center">
        <h3 className="text-lg font-semibold text-black">{phase}</h3>
        <span className="ml-2 text-sm font-mono bg-yellow-100 px-2 py-1 rounded">
          {weeks} weeks
        </span>
      </div>
      <p className="mt-1 text-gray-600">{description}</p>
      <div className={`mt-2 inline-flex items-center px-3 py-1 rounded-full text-sm
        ${status === 'Current' ? 'bg-blue-100 text-blue-800 animate-pulse' :
          status === 'Completed' ? 'bg-green-100 text-green-800' :
          'bg-gray-100 text-gray-800'}`}>
        {status === 'Completed' ? <CheckCircle className="w-4 h-4 mr-1" /> :
         status === 'Current' ? <Clock className="w-4 h-4 mr-1" /> :
         <AlertCircle className="w-4 h-4 mr-1" />}
        {status}
      </div>
    </div>
  </div>
);

const ProgressBar = ({ phase, completed }) => (
  <div className="mb-4 group">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium">{phase}</span>
      <span className="text-sm font-medium">{completed}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden relative">
      {/* Construction pattern background */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(-45deg,#fbbf24,#fbbf24_10px,transparent_10px,transparent_20px)]" />
      <div 
        className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 h-full rounded-full transition-all duration-500 relative"
        style={{ width: `${completed}%` }}>
        {/* Animated construction effect */}
        <div className="absolute inset-0 animate-[progress-slide_20s_linear_infinite] bg-[linear-gradient(-45deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1)_10px,transparent_10px,transparent_20px)]" />
      </div>
    </div>
  </div>
);

const ProgramOfWorks = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Card className="mb-8 bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="border-b border-yellow-200">
          <CardTitle className="text-2xl text-yellow-900">Project Timeline & Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-yellow-900">Overall Progress</h3>
            <ProgressBar phase="Total Project Completion" completed={15} />
          </div>
          
          <TimelineItem 
            icon={Calendar}
            phase="Phase 1: Planning & Design"
            weeks={3}
            status="Current"
            description="Requirements gathering and system design"
            color="bg-gradient-to-br from-blue-400 to-blue-600"
          />
          
          <TimelineItem 
            icon={Code}
            phase="Phase 2: Building the System"
            weeks={6}
            status="Upcoming"
            description="Core development and special features implementation"
            color="bg-gradient-to-br from-purple-400 to-purple-600"
          />
          
          <TimelineItem 
            icon={TestTube}
            phase="Phase 3: Testing & Quality Checks"
            weeks={7}
            status="Upcoming"
            description="Comprehensive testing and quality assurance"
            color="bg-gradient-to-br from-orange-400 to-orange-600"
          />
          
          <TimelineItem 
            icon={Rocket}
            phase="Phase 4: Launch & Training"
            weeks={8}
            status="Upcoming"
            description="System deployment and team training"
            color="bg-gradient-to-br from-green-400 to-green-600"
          />
          
          <TimelineItem 
            icon={Headphones}
            phase="Phase 5: Support & Improvements"
            weeks={9}
            status="Upcoming"
            description="Ongoing support and system optimization"
            color="bg-gradient-to-br from-red-400 to-red-600"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="border-b border-yellow-200">
          <CardTitle className="text-2xl text-yellow-900">Key Milestones Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <ProgressBar phase="Requirements Documentation" completed={60} />
          <ProgressBar phase="System Design" completed={30} />
          <ProgressBar phase="Core Development" completed={0} />
          <ProgressBar phase="Testing" completed={0} />
          <ProgressBar phase="Training Materials" completed={0} />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgramOfWorks;