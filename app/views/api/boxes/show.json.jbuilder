incs = @box.inclusions
prods = @box.products
json.boxes do 
  json.set! @box.id do
    json.partial! 'api/boxes/box', box: @box
  end
end
json.inclusions do
  incs.each do |inclusion|
    json.set! inclusion.id do
      json.partial! 'api/inclusions/inclusion', inclusion: inclusion
    end
  end
end
json.products do
  incs.each do |inclusion|
    product = inclusion.product
    json.set! product.id do
      json.extract! product, :id, :description, :name, :price,  :subscription_price
      json.imgUrl url_for(product.photo)
    end
  end
end

