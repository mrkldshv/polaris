<Frame>
  <Navigation location="/">
    <Navigation.Section
      items={[
        {
          url: '/path/to/place',
          label: 'Home',
          icon: HomeMinor,
        },
        {
          url: '/path/to/place',
          label: 'Orders',
          icon: OrdersMinor,
        },
        {
          url: '/path/to/place',
          label: 'Products',
          icon: ProductsMinor,
        },
      ]}
    />
    <Navigation.Section
      title="Sales channels"
      items={[
        {
          url: '/path/to/place',
          label: 'Online Store',
          icon: OnlineStoreMinor,
        },
      ]}
      action={{
        accessibilityLabel: 'Add sales channel',
        icon: CirclePlusOutlineMinor,
        onClick: () => {},
      }}
    />
  </Navigation>
</Frame>