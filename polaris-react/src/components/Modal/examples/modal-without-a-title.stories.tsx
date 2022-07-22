function ModalWithoutTitleExample() {
  const [active, setActive] = useState(true);

  const handleChange = useCallback(() => setActive(!active), [active]);

  const activator = <Button onClick={handleChange}>Open</Button>;

  return (
    <div style={{height: '500px'}}>
      <Modal
        title="Reach more shoppers with Instagram product tags"
        titleHidden
        activator={activator}
        open={active}
        onClose={handleChange}
        primaryAction={{
          content: 'Add Instagram',
          onAction: handleChange,
        }}
        secondaryActions={[
          {
            content: 'Learn more',
            onAction: handleChange,
          },
        ]}
      >
        <Modal.Section titleHidden>
          <TextContainer>
            <p>
              Use Instagram posts to share your products with millions of
              people. Let shoppers buy from your store without leaving
              Instagram.
            </p>
          </TextContainer>
        </Modal.Section>
      </Modal>
    </div>
  );
}