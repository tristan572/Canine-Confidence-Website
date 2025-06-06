interface BookingWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingWidget({ isOpen, onClose }: BookingWidgetProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-hidden relative">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-charcoal">Book Your Session</h2>
          <button
            onClick={onClose}
            className="text-medium-grey hover:text-charcoal text-2xl font-bold"
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
            allow="payment"
          />
        </div>
      </div>
    </div>
  );
}