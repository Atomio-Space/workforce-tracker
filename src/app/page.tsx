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
  <div className="flex items-start mb-8 relative">
    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${color}`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div className="ml-4 flex-grow">
      <div className="flex items-center">
        <h3 className="text-lg font-semibold">{phase}</h3>
        <span className="ml-2 text-sm text-gray-500">{weeks}</span>
      </div>
      <p className="mt-1 text-gray-600">{description}</p>
      <div className={`mt-2 inline-flex items-center px-3 py-1 rounded-full text-sm ${
        status === 'Current' ? 'bg-blue-100 text-blue-800' :
        status === 'Completed' ? 'bg-green-100 text-green-800' :
        'bg-gray-100 text-gray-800'
      }`}>
        {status === 'Completed' ? <CheckCircle className="w-4 h-4 mr-1" /> :
         status === 'Current' ? <Clock className="w-4 h-4 mr-1" /> :
         <AlertCircle className="w-4 h-4 mr-1" />}
        {status}
      </div>
    </div>
  </div>
);

const ProgressBar = ({ phase, completed }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium">{phase}</span>
      <span className="text-sm font-medium">{completed}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div 
        className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" 
        style={{ width: `${completed}%` }}
      ></div>
    </div>
  </div>
);

const ProgramOfWorks = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Project Timeline & Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Overall Progress</h3>
            <ProgressBar phase="Total Project Completion" completed={15} />
          </div>
          
          <TimelineItem 
            icon={Calendar}
            phase="Phase 1: Planning & Design"
            weeks={1-3}
            status="Current"
            description="Requirements gathering and system design"
            color="bg-blue-500"
          />
          
          <TimelineItem 
            icon={Code}
            phase="Phase 2: Building the System"
            weeks={4-6}
            status="Upcoming"
            description="Core development and special features implementation"
            color="bg-purple-500"
          />
          
          <TimelineItem 
            icon={TestTube}
            phase="Phase 3: Testing & Quality Checks"
            weeks={7}
            status="Upcoming"
            description="Comprehensive testing and quality assurance"
            color="bg-orange-500"
          />
          
          <TimelineItem 
            icon={Rocket}
            phase="Phase 4: Launch & Training"
            weeks={8}
            status="Upcoming"
            description="System deployment and team training"
            color="bg-green-500"
          />
          
          <TimelineItem 
            icon={Headphones}
            phase="Phase 5: Support & Improvements"
            weeks={9}
            status="Upcoming"
            description="Ongoing support and system optimization"
            color="bg-red-500"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Key Milestones Progress</CardTitle>
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