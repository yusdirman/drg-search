class AddCodeObjectIdToNumcase < ActiveRecord::Migration
  def change
    add_column :num_cases, :code_object_id, :integer
    add_column :num_cases, :code_object_type, :string
  end
end
