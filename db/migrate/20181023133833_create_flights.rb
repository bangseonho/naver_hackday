class CreateFlights < ActiveRecord::Migration[5.0]
  def change
    create_table :flights do |t|
    	t.string 	 :departure
    	t.string 	 :arrival
    	t.integer  :departureday
    	t.integer  :arrivalday
    	t.integer  :thenumber

      t.timestamps
    end
  end
end
