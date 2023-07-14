import React from 'react';
import { render } from '@testing-library/react';
import ProjectCard from './ProjectCard';

describe('ProjectCard', () => {
  const mockProps = {
    projectPlace: 'Berlin',
    estimatedImplementationDate: '2023-12-31',
    slogan: 'Build the best project ever',
    shortDesc: 'A short description of the project',
    projectImage: 'https://example.com/project-image.jpg',
    createdBy: 'John Doe',
    createdDate: '2023-01-01',
    sharesTaken: 50,
    shareValue: 10,
    projectValue: 1.000,
    totalShares: 100,
  };

  it('renders the project card with correct values', () => {
  const { getByText, getByAltText } = render(
    <ProjectCard {...mockProps} />
  );

  console.log(`Project Image: ${getByAltText('').getAttribute('src')}`);
  console.log(`Slogan: ${getByText(mockProps.slogan).textContent}`);
  console.log(`Short Description: ${getByText(mockProps.shortDesc).textContent}`);
  console.log(`Created By: ${getByText(`erstellt von ${mockProps.createdBy}`).textContent}`);
  console.log(`Project Place: ${getByText(`${mockProps.projectPlace}`).textContent}`);
  console.log(`Shares Taken: ${getByText(`${mockProps.sharesTaken * mockProps.shareValue} €`).textContent}`);
  console.log(`Project Value: ${getByText(`${mockProps.projectValue} €`).textContent}`);

  expect(getByAltText('')).toHaveAttribute('src', mockProps.projectImage);
  expect(getByText(mockProps.slogan)).toBeInTheDocument();
  expect(getByText(mockProps.shortDesc)).toBeInTheDocument();
  expect(getByText(`erstellt von ${mockProps.createdBy}`)).toBeInTheDocument();
  expect(getByText(`${mockProps.projectPlace}`)).toBeInTheDocument();
  expect(getByText(`${mockProps.sharesTaken * mockProps.shareValue} €`)).toBeInTheDocument();
  expect(getByText(`${mockProps.projectValue} €`)).toBeInTheDocument();
});

});
