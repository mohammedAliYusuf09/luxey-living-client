import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-teal-400"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: progress }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ originX: 0 }}
      />
    </div>
  );
};