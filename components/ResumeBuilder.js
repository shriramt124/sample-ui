import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const steps = [
    { id: 'personal', title: 'Personal Info' },
    { id: 'experience', title: 'Experience' },
    { id: 'education', title: 'Education' },
    { id: 'skills', title: 'Skills' },
    { id: 'others', title: 'Others' },
];

// Step Components
const PersonalInfoForm = ({ formData, handleInputChange }) => (
    <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-800">Let's start with your basic information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="block">
                <span className="text-sm font-medium text-gray-700">First Name *</span>
                <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.personal.firstName || ''}
                    onChange={(e) => handleInputChange('personal', 'firstName', e.target.value)}
                />
            </label>
            <label className="block">
                <span className="text-sm font-medium text-gray-700">Last Name *</span>
                <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.personal.lastName || ''}
                    onChange={(e) => handleInputChange('personal', 'lastName', e.target.value)}
                />
            </label>
            <label className="block">
                <span className="text-sm font-medium text-gray-700">Email *</span>
                <input
                    type="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.personal.email || ''}
                    onChange={(e) => handleInputChange('personal', 'email', e.target.value)}
                />
            </label>
            <label className="block">
                <span className="text-sm font-medium text-gray-700">Phone</span>
                <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.personal.phone || ''}
                    onChange={(e) => handleInputChange('personal', 'phone', e.target.value)}
                />
            </label>
            <label className="block">
                <span className="text-sm font-medium text-gray-700">City</span>
                <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.personal.city || ''}
                    onChange={(e) => handleInputChange('personal', 'city', e.target.value)}
                />
            </label>
            <label className="block">
                <span className="text-sm font-medium text-gray-700">Country</span>
                <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.personal.country || ''}
                    onChange={(e) => handleInputChange('personal', 'country', e.target.value)}
                />
            </label>
        </div>
        <div className="space-y-4">
            <label className="block">
                <span className="text-sm font-medium text-gray-700">Professional Summary Title</span>
                <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.personal.professionalSummaryTitle || ''}
                    onChange={(e) =>
                        handleInputChange('personal', 'professionalSummaryTitle', e.target.value)
                    }
                />
            </label>
            <label className="block">
                <span className="text-sm font-medium text-gray-700">Professional Summary</span>
                <textarea
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 h-32"
                    value={formData.personal.professionalSummary || ''}
                    onChange={(e) =>
                        handleInputChange('personal', 'professionalSummary', e.target.value)
                    }
                />
            </label>
        </div>
    </div>
);

const ExperienceForm = ({ formData, handleArrayInputChange, addNewItem, removeItem }) => (
    <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-800">Tell us about your work experience</h3>
        {formData.experience.map((_, index) => (
            <div key={index} className="p-6 border rounded-lg space-y-4 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <label className="block">
                        <span className="text-sm font-medium text-gray-700">Job Title</span>
                        <input
                            type="text"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            value={formData.experience[index].jobTitle || ''}
                            onChange={(e) => handleArrayInputChange('experience', index, 'jobTitle', e.target.value)}
                        />
                    </label>
                    <label className="block">
                        <span className="text-sm font-medium text-gray-700">Company</span>
                        <input
                            type="text"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            value={formData.experience[index].company || ''}
                            onChange={(e) => handleArrayInputChange('experience', index, 'company', e.target.value)}
                        />
                    </label>
                    <label className="block">
                        <span className="text-sm font-medium text-gray-700">Start Date</span>
                        <input
                            type="date"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            value={formData.experience[index].startDate || ''}
                            onChange={(e) => handleArrayInputChange('experience', index, 'startDate', e.target.value)}
                        />
                    </label>
                    <label className="block">
                        <span className="text-sm font-medium text-gray-700">End Date</span>
                        <input
                            type="date"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            value={formData.experience[index].endDate || ''}
                            onChange={(e) => handleArrayInputChange('experience', index, 'endDate', e.target.value)}
                        />
                    </label>
                </div>
                <label className="block">
                    <span className="text-sm font-medium text-gray-700">Description</span>
                    <textarea
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 h-32"
                        value={formData.experience[index].description || ''}
                        onChange={(e) => handleArrayInputChange('experience', index, 'description', e.target.value)}
                    />
                </label>
                <button
                    onClick={() => removeItem('experience', index)}
                    className="absolute top-4 right-4 text-red-600 hover:text-red-700 transition-colors duration-200"
                >
                    Remove
                </button>
            </div>
        ))}
        <button
            onClick={() => addNewItem('experience')}
            className="inline-flex items-center px-4 py-2 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200"
        >
            + Add Another Experience
        </button>
    </div>
);

const EducationForm = ({ formData, handleArrayInputChange, addNewItem, removeItem }) => (
    <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-800">What's your educational background?</h3>
        {formData.education.map((_, index) => (
            <div key={index} className="p-6 border rounded-lg space-y-4 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <label className="block">
                        <span className="text-sm font-medium text-gray-700">School/University</span>
                        <input
                            type="text"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            value={formData.education[index].school || ''}
                            onChange={(e) => handleArrayInputChange('education', index, 'school', e.target.value)}
                        />
                    </label>
                    <label className="block">
                        <span className="text-sm font-medium text-gray-700">Degree</span>
                        <input
                            type="text"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            value={formData.education[index].degree || ''}
                            onChange={(e) => handleArrayInputChange('education', index, 'degree', e.target.value)}
                        />
                    </label>
                    <label className="block">
                        <span className="text-sm font-medium text-gray-700">Start Date</span>
                        <input
                            type="date"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            value={formData.education[index].startDate || ''}
                            onChange={(e) => handleArrayInputChange('education', index, 'startDate', e.target.value)}
                        />
                    </label>
                    <label className="block">
                        <span className="text-sm font-medium text-gray-700">End Date</span>
                        <input
                            type="date"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            value={formData.education[index].endDate || ''}
                            onChange={(e) => handleArrayInputChange('education', index, 'endDate', e.target.value)}
                        />
                    </label>
                </div>
                <label className="block">
                    <span className="text-sm font-medium text-gray-700">Description</span>
                    <textarea
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 h-32"
                        value={formData.education[index].description || ''}
                        onChange={(e) => handleArrayInputChange('education', index, 'description', e.target.value)}
                    />
                </label>
                <button
                    onClick={() => removeItem('education', index)}
                    className="absolute top-4 right-4 text-red-600 hover:text-red-700 transition-colors duration-200"
                >
                    Remove
                </button>
            </div>
        ))}
        <button
            onClick={() => addNewItem('education')}
            className="inline-flex items-center px-4 py-2 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200"
        >
            + Add Another Education
        </button>
    </div>
);

const SkillsForm = ({ formData, handleInputChange }) => (
    <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-800">What are your key skills?</h3>
        <div className="space-y-4">
            <label className="block">
                <span className="text-sm font-medium text-gray-700">Technical Skills (Separate with commas)</span>
                <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.skills.technicalSkills || ''}
                    onChange={(e) => handleInputChange('skills', 'technicalSkills', e.target.value)}
                />
            </label>
            <label className="block">
                <span className="text-sm font-medium text-gray-700">Soft Skills (Separate with commas)</span>
                <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.skills.softSkills || ''}
                    onChange={(e) => handleInputChange('skills', 'softSkills', e.target.value)}
                />
            </label>
            <label className="block">
                <span className="text-sm font-medium text-gray-700">Languages (Separate with commas)</span>
                <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.skills.languages || ''}
                    onChange={(e) => handleInputChange('skills', 'languages', e.target.value)}
                />
            </label>
        </div>
    </div>
);

const OthersForm = ({ formData, handleInputChange }) => (
    <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-800">Additional Information</h3>
        <div className="space-y-4">
            <label className="block">
                <span className="text-sm font-medium text-gray-700">Certifications</span>
                <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.others.certifications || ''}
                    onChange={(e) => handleInputChange('others', 'certifications', e.target.value)}
                />
            </label>
            <label className="block">
                <span className="text-sm font-medium text-gray-700">Projects</span>
                <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.others.projects || ''}
                    onChange={(e) => handleInputChange('others', 'projects', e.target.value)}
                />
            </label>
            <label className="block">
                <span className="text-sm font-medium text-gray-700">Additional Information</span>
                <textarea
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 h-32"
                    value={formData.others.additionalInformation || ''}
                    onChange={(e) => handleInputChange('others', 'additionalInformation', e.target.value)}
                />
            </label>
        </div>
    </div>
);

export default function ResumeBuilder({ onClose }) {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        personal: {},
        experience: [],
        education: [],
        skills: {},
        others: {},
    });

    const handleInputChange = (section, field, value) => {
        setFormData((prev) => ({
            ...prev,
            [section]: typeof prev[section] === 'object'
                ? { ...prev[section], [field]: value }
                : prev[section],
        }));
    };

    const handleArrayInputChange = (section, index, field, value) => {
        setFormData((prev) => ({
            ...prev,
            [section]: prev[section].map((item, i) =>
                i === index ? { ...item, [field]: value } : item
            ),
        }));
    };

    const addNewItem = (section) => {
        setFormData((prev) => ({
            ...prev,
            [section]: [...prev[section], {}],
        }));
    };

    const removeItem = (section, index) => {
        setFormData((prev) => ({
            ...prev,
            [section]: prev[section].filter((_, i) => i !== index),
        }));
    };

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    const handleSaveDraft = () => {
        localStorage.setItem('resumeDraft', JSON.stringify(formData));
        alert('Draft saved successfully!');
    };

    const handlePreview = () => {
        console.log('Preview data:', formData);
        alert('Preview generated in the console!');
    };

    const stepComponents = {
        personal: PersonalInfoForm,
        experience: ExperienceForm,
        education: EducationForm,
        skills: SkillsForm,
        others: OthersForm,
    };

    const CurrentStepComponent = stepComponents[steps[currentStep].id];

    return (
        <div className="space-y-6">
            <div className="flex items-center space-x-4 border-b">
                {steps.map((step, index) => (
                    <button
                        key={step.id}
                        className={`px-4 py-2 ${currentStep === index ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                        onClick={() => setCurrentStep(index)}
                    >
                        {step.title}
                    </button>
                ))}
            </div>
            <div className="bg-white rounded-lg p-6 space-y-6">
                <CurrentStepComponent
                    formData={formData}
                    handleInputChange={handleInputChange}
                    handleArrayInputChange={handleArrayInputChange}
                    addNewItem={addNewItem}
                    removeItem={removeItem}
                />
                <div className="flex justify-between items-center pt-4 border-t">
                    <button
                        onClick={handlePrevious}
                        disabled={currentStep === 0}
                        className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50"
                    >
                        <ChevronLeft size={20} /> Previous
                    </button>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleSaveDraft}
                            className="px-4 py-2 text-gray-600 hover:text-gray-900 border rounded-lg hover:bg-gray-50"
                        >
                            Save Draft
                        </button>
                        <button
                            onClick={handlePreview}
                            className="px-4 py-2 text-gray-600 hover:text-gray-900 border rounded-lg hover:bg-gray-50"
                        >
                            Preview
                        </button>
                        <button
                            onClick={onClose}
                            className="px-4 py-2 text-gray-600 hover:text-gray-900 border rounded-lg hover:bg-gray-50"
                        >
                            Back to Dashboard
                        </button>
                        {currentStep < steps.length - 1 && (
                            <button
                                onClick={handleNext}
                                className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                            >
                                Next <ChevronRight size={20} />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}