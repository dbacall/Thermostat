feature 'remembers city on refresh' do

  scenario 'it should still show the city and temperature after refresh' do
    visit '/'
    select 'London', from: 'city'
    visit '/'
    expect(page).to have_content 'Temperature outside'
  end

end
