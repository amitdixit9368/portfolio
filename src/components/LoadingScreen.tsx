import { motion } from 'framer-motion';
import './LoadingScreen.css';

interface LoadingScreenProps {
  isLoading?: boolean;
}

const LoadingScreen = ({ isLoading = true }: LoadingScreenProps) => {
  if (!isLoading) return null;

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loading-container">
        <div className="loading-logo">
          <span>𝔸𝕸𝕴𝕿</span>
        </div>
        <div className="loading-bar">
          <motion.div
            className="loading-progress"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </div>
        <p className="loading-text">Building amazing experiences...</p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
