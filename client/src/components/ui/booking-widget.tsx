interface BookingWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingWidget({ isOpen, onClose }: BookingWidgetProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden relative shadow-2xl">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-charcoal">Book Your Training Session</h2>
          <button
            onClick={onClose}
            className="text-medium-grey hover:text-charcoal text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close booking widget"
          >
            ×
          </button>
        </div>
        
        <div className="h-[700px]">
          <iframe 
            src="https://canineconfidence.simplybook.net"
            className="w-full h-full border-0"
            title="Book Your Training Session"
            allow="payment; microphone; camera"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
}