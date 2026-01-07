import toast from 'react-hot-toast';

const RESUME_PATH = '/OLUWAROTIMI ADEGBORIOYE tech227.pdf';
const DOWNLOAD_FILENAME = 'Oluwarotimi-CV.pdf';

/**
 * Handles resume download with toast notifications
 * @returns Promise that resolves when download is initiated
 */
export const downloadResume = (): Promise<void> => {
  return toast.promise(
    new Promise<void>((resolve, reject) => {
      try {
        // Create and trigger download
        const link = document.createElement('a');
        link.href = RESUME_PATH;
        link.download = DOWNLOAD_FILENAME;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Simulate loading time
        setTimeout(() => resolve(), 1500);
      } catch (error) {
        reject(error);
      }
    }),
    {
      loading: 'Preparing your resume...',
      success: 'Resume downloaded successfully!',
      error: 'Failed to download resume. Please try again.',
    }
  );
};

/**
 * Simple resume download without toast promise wrapper
 * Useful when you want to show custom toast messages
 */
export const downloadResumeSimple = (): void => {
  try {
    const link = document.createElement('a');
    link.href = RESUME_PATH;
    link.download = DOWNLOAD_FILENAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Failed to download resume:', error);
    toast.error('Failed to download resume. Please try again.');
  }
};
