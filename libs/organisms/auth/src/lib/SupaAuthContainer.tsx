export const SupaAuthContainer = () => (
  <div className="authcontainer">
    <Card>
      <Space direction="vertical" size={8}>
        <div>
          <Typography.Title level={3}>Watheia Gatekeeper</Typography.Title>
        </div>
        <Auth
          supabaseClient={supabase}
          providers={["google", "github"]}
          view={"sign_in"}
          socialLayout="horizontal"
          socialButtonSize="xlarge"
        />
      </Space>
    </Card>
  </div>
)
