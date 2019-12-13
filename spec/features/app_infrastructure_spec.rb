feature 'home route works' do
  
  scenario 'can see thermostat' do
    visit '/'
    expect(page).to have_content 'ThermostatinatorBotFace'
  end

end