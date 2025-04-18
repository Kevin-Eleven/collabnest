import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Link as LinkIcon } from "lucide-react";
import AccessLearningLinksModal from "../modals/AccessLearningLinksModal";

export function ProjectResources({ resources }: { resources: JSON[] }) {
  const [showAll, setShowAll] = useState(false);
  const [showResorces, setShowResources] = useState(false);
  // Display all resources if showAll is true, otherwise only show the first 3
  const displayedResources = showAll ? resources : resources.slice(0, 3);

  return (
    <Card>
      <CardHeader>
        <div className='flex justify-between items-center'>
          <CardTitle className='text-lg font-medium'>
            Project Resources
          </CardTitle>
          <Button
            variant='ghost'
            size='sm'
            className='text-sm'
            onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "View All"}
          </Button>
        </div>
        <p className='text-sm text-gray-500'>
          Uploaded by your mentor and professors
        </p>
      </CardHeader>
      <CardContent className='space-y-4'>
        {displayedResources.map((resource, index) => (
          <div key={index} className='flex items-start gap-3'>
            {resource.type === "doc" ? (
              <LinkIcon className='bg-gray-100 p-2 rounded' />
            ) : (
              <FileText className='bg-gray-100 p-2 rounded' />
            )}
            <div>
              <p className='font-medium'>{resource.name}</p>
              <p className='text-sm text-gray-500'>{resource.type}</p>
            </div>
          </div>
        ))}
        <Button
          className='w-full'
          onClick={() => {
            if (showResorces === true) {
              setShowResources(false);
            } else {
              setShowResources(true);
            }
          }}>
          Access Learning Materials
        </Button>
        <AccessLearningLinksModal
          isOpen={showResorces}
          onClose={() => setShowResources(false)}
          materials={resources}
        />
      </CardContent>
    </Card>
  );
}
