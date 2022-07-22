function RangeSliderWithPreciseRangeControlExample() {
  const [rangeValue, setRangeValue] = useState(0);

  const handleRangeSliderChange = useCallback(
    (value) => setRangeValue(value),
    [],
  );

  return (
    <Card sectioned title="Navigation branding">
      <RangeSlider
        output
        label="Logo offset"
        min={-20}
        max={20}
        value={rangeValue}
        onChange={handleRangeSliderChange}
      />
    </Card>
  );
}