export default function Playground() {
  return (
    <div className="max-w-lg p-6 mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Testing</h1>

      <div className="text-xs text-gray-700 uppercase space-y-4">
        <label className="float-label">
          <input placeholder=" " className="form-input" type="text" />
          <span className="block font-medium">Name</span>
        </label>
        <label className="float-label">
          <input placeholder=" " className="form-input" type="text" />
          <span className="block font-medium">Email</span>
        </label>
        <label className="float-label">
          <input placeholder=" " className="form-input" type="text" />
          <span className="block font-medium">Hometown</span>
        </label>
      </div>
    </div>
  );
}
